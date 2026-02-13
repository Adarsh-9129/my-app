import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Review from '@/model/Review';

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
            return NextResponse.json({ success: false, error: 'Review not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
