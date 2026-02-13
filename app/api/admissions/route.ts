import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enquiry from '@/model/Userschema';

export async function POST(req: NextRequest) {
  try {
    console.log('=== Starting Admissions Form Submission ===');
    console.log('Starting database connection...');
    
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI not found in environment variables');
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      );
    }
    
    console.log('MONGODB_URI exists:', process.env.MONGODB_URI.substring(0, 50) + '...');
    
    // Connect to database
    const db = await dbConnect();
    console.log('Database connected successfully');
    console.log('Database name:', db.connection.name);
    
    const body = await req.json();
    console.log('Request body received:', body);
    
    const { studentName, parentName, email, phone, classApplying, message } = body;
    
    // Validation
    if (!studentName || !parentName || !email || !phone || !classApplying) {
      console.error('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Create enquiry in database
    console.log('Creating enquiry document...');
    const enquiryData = {
      studentName,
      parentName,
      email,
      phone,
      classApplying,
      message,
      createdAt: new Date()
    };
    
     
    
    const enquiry = await Enquiry.create(enquiryData);
    console.log('Enquiry created with ID:', enquiry._id);
    
    // Verify the document was actually saved
    const verifyDoc = await Enquiry.findById(enquiry._id);
    if (!verifyDoc) {
      console.error('VERIFICATION FAILED: Document not found after creation');
      return NextResponse.json(
        { error: 'Failed to save enquiry - verification failed' },
        { status: 500 }
      );
    }
    
    console.log('VERIFICATION SUCCESSFUL: Document confirmed in database');
    console.log('=== Submission Complete ===');
    
    return NextResponse.json(
      { 
        success: true, 
        id: enquiry._id, 
        message: 'Enquiry submitted successfully',
        verified: true
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('=== ADMISSIONS ENQUIRY ERROR ===');
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error Message:', errorMessage);
    console.error('Error Stack:', errorStack);
    
    return NextResponse.json(
      { 
        error: 'Server error. Please try again.',
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    );
  }
}
