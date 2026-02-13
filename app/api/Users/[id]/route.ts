import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enquiry from '@/model/Userschema';

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const deletedEnquiry = await Enquiry.findByIdAndDelete(id);

        if (!deletedEnquiry) {
            return NextResponse.json({ success: false, error: 'User Request not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
