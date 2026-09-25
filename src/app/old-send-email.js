const sendEmail = async (emailMessage, serivceRequested) => {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "postmaster@zuzanajankovafoto.cz",
      subject: "Test Envbnbmail from Next.js",
      text: $("Ahoj Zuzko, je tu" & emailMessage),
    }),
  });

  const data = await response.json();
  if (response.ok) {
    alert("Email sent successfully!");
  } else {
    console.error("Error sending email:", data.error);
    alert("Failed to send email.");
  }
};
