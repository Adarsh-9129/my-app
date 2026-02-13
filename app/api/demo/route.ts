import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Demo from '@/model/DemoSchema';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { studentName, parentEmail, phone, className, message } = await req.json();

        if (!studentName || !parentEmail || !phone || !className) {
            return NextResponse.json(
                { error: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        const newDemo = new Demo({
            studentName,
            parentEmail,
            phone,
            className,
            message,
        });

        await newDemo.save();

        return NextResponse.json(
            { message: 'Demo request submitted successfully', success: true, demo: newDemo },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await dbConnect();
        const demos = await Demo.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: demos });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
