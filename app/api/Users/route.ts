import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enquiry from '@/model/Userschema';

export async function GET() {
  try {
    await dbConnect();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: enquiries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { studentName, parentName, email, phone, classApplying, message } = await req.json();

    if (!studentName || !parentName || !email || !phone || !classApplying) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    const newEnquiry = await Enquiry.create({
      studentName,
      parentName,
      email,
      phone,
      classApplying,
      message,
    });

    return NextResponse.json(
      { message: 'Request submitted successfully', success: true, enquiry: newEnquiry },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}