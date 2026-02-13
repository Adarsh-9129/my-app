import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Review from '@/model/Review';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        const review = await Review.create(body);

        return NextResponse.json({ success: true, data: review }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const reviews = await Review.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: reviews });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
