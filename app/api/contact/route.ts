import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactFormData } from "@/types/forms";

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Generate HTML email template
const generateEmailTemplate = (data: ContactFormData) => {
  const assetTypeLabels: Record<string, string> = {
    vehicle: "Vehicle",
    "real-estate": "Real Estate",
    business: "Business",
    farm: "Farm",
    other: "Other",
  };

  const sourceLabels: Record<string, string> = {
    google: "Google Search",
    social: "Social Media",
    referral: "Friend/Family Referral",
    other: "Other",
  };

  const replySubject = encodeURIComponent(`Re: Your Kumusha Assets Inquiry - ${assetTypeLabels[data.assetType] || data.assetType}`);
  const replyBody = encodeURIComponent(`Dear ${data.name},\n\nThank you for your interest in Kumusha Assets. We have reviewed your inquiry regarding your ${assetTypeLabels[data.assetType] || data.assetType} in ${data.assetLocation}.\n\n`);
  const replyLink = `mailto:${data.email}?subject=${replySubject}&body=${replyBody}`;
  const whatsappLink = `https://wa.me/${data.phone.replace(/[^0-9+]/g, "")}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #c41e1e 0%, #8b1515 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Kumusha Assets</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 25px 40px; background-color: #fef2f2; border-bottom: 1px solid #fecaca;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="text-align: center;">
                    <p style="color: #991b1b; font-size: 13px; margin: 0 0 15px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Quick Actions</p>
                    <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                      <tr>
                        <td style="padding-right: 10px;">
                          <a href="${replyLink}" style="display: inline-block; background-color: #c41e1e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600;">
                            ✉️ Reply via Email
                          </a>
                        </td>
                        <td style="padding-left: 10px;">
                          <a href="${whatsappLink}" style="display: inline-block; background-color: #25d366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600;">
                            📱 WhatsApp
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Client Information -->
          <tr>
            <td style="padding: 30px 40px;">
              <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
                👤 Client Information
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                    <p style="color: #1f2937; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                    <p style="margin: 5px 0 0 0;">
                      <a href="mailto:${data.email}" style="color: #c41e1e; font-size: 16px; text-decoration: none; font-weight: 500;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone / WhatsApp</span>
                    <p style="margin: 5px 0 0 0;">
                      <a href="tel:${data.phone}" style="color: #c41e1e; font-size: 16px; text-decoration: none; font-weight: 500;">${data.phone}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Asset Details -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
                🏠 Asset Details
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="50%" style="padding: 10px 10px 10px 0; vertical-align: top;">
                    <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Asset Type</span>
                    <p style="color: #1f2937; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">
                      <span style="display: inline-block; background-color: #fef2f2; color: #991b1b; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                        ${assetTypeLabels[data.assetType] || data.assetType}
                      </span>
                    </p>
                  </td>
                  <td width="50%" style="padding: 10px 0 10px 10px; vertical-align: top;">
                    <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Location</span>
                    <p style="color: #1f2937; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">📍 ${data.assetLocation}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Description -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
                📝 Description
              </h2>
              <div style="background-color: #f9fafb; border-left: 4px solid #c41e1e; padding: 20px; border-radius: 0 8px 8px 0;">
                <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.description}</p>
              </div>
            </td>
          </tr>

          <!-- Source -->
          ${data.source ? `
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f0fdf4; border-radius: 8px; padding: 15px;">
                <tr>
                  <td style="padding: 15px;">
                    <span style="color: #166534; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">📊 How they found us</span>
                    <p style="color: #166534; font-size: 16px; margin: 5px 0 0 0; font-weight: 600;">${sourceLabels[data.source] || data.source}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ''}

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 25px 40px; text-align: center;">
              <p style="color: #9ca3af; font-size: 13px; margin: 0 0 10px 0;">
                This email was sent from the Kumusha Assets website contact form.
              </p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                Received on ${new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields: (keyof ContactFormData)[] = [
      "name",
      "email",
      "phone",
      "assetType",
      "assetLocation",
      "description",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter and send email
    const transporter = createTransporter();

    const assetTypeLabels: Record<string, string> = {
      vehicle: "Vehicle",
      "real-estate": "Real Estate",
      business: "Business",
      farm: "Farm",
      other: "Other",
    };

    const mailOptions = {
      from: `"Kumusha Assets Website" <${process.env.SMTP_FROM}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: data.email,
      subject: `New Inquiry: ${assetTypeLabels[data.assetType] || data.assetType} in ${data.assetLocation} - ${data.name}`,
      html: generateEmailTemplate(data),
    };

    await transporter.sendMail(mailOptions);

    console.log("Contact form submission sent:", data.email);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your submission. We will contact you within 48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
