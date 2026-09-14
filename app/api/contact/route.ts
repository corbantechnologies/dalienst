import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, organization, category, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // If API key is not yet configured, log for development/testing and return graceful success
      console.warn("[Contact API] RESEND_API_KEY is not set. Simulating email dispatch.");
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Inquiry captured successfully. (Configure RESEND_API_KEY for live delivery)",
      });
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "contact@dalienst.co.ke";
    const toAddress = process.env.CONTACT_TO_EMAIL || "oduordalienst@gmail.com";

    const emailResult = await resend.emails.send({
      from: `Dalienst Portfolio <${fromAddress}>`,
      to: [toAddress],
      replyTo: email,
      subject: `[Executive Inquiry] ${category} — ${name}${organization ? ` (${organization})` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #eb8a0c; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">Executive Consultation Inquiry</h2>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received via dalienst.co.ke</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Client Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #eb8a0c; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Organization:</td>
              <td style="padding: 8px 0; color: #0f172a;">${organization || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Project Category:</td>
              <td style="padding: 8px 0; color: #0f172a;"><span style="display: inline-block; background-color: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">${category}</span></td>
            </tr>
          </table>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 3px solid #0f172a; margin-bottom: 20px;">
            <h3 style="margin: 0 0 8px 0; font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message &amp; Scope</h3>
            <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
            <p style="margin: 0;">Sent automatically from Dalienst Owino Oduor's Portfolio Console · dalienst.co.ke</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: emailResult });
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
