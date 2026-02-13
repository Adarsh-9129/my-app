import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/model/ContactSchema';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { fullName, email, phone, subject, message } = await req.json();

        if (!fullName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        const newContact = new Contact({
            fullName,
            email,
            phone,
            subject,
            message,
        });

        await newContact.save();

        return NextResponse.json(
            { message: 'Message sent successfully', success: true, contact: newContact },
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
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: contacts });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
