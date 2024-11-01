'use client';
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import { useSideHeader } from "@/utils/SideHeaderToggle";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react"; // Import useState for managing the selected services

export default function ContactPage() {
  const { addTitle } = useSideHeader()
  const [selectedServices, setSelectedServices] = useState("");
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [fullName, setFullName] = useState("")
  const [status, setStatus] = useState("");
  // Predefined services
  const services = [
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Graphic Design",
    "Content Writing",
    "SEO Optimization"
  ];

  useEffect(() => {
    addTitle("Connect")
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: fullName,
        email,
        phoneNumber,
        message,
        service: selectedServices,
      }),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setSelectedServices('');
    } else {
      setStatus('Error sending message.');
    }


  };

  return (
    <>
      <PageHeading
        title="Get in Touch!"
        videoSrc="/video/blackWhiteVideo.mp4"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Have an idea you want to explore? We’d love to collaborate!"
              subtitle="Let’s bring your vision to life!"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" required value={fullName}
                  onChange={(e) => setFullName(e.target.value)} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email Address*</label>
                <input type="email" className="cs-form_field" required value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Select Service(s)*</label>
                <div>
                  <select name="services" className="cs-form_field text-white" required value={selectedServices}
                    onChange={(e) => setSelectedServices(e.target.value)}>
                    <option value="" disabled className="text-gray-500">Select Service</option>
                    <option value="App Development" className="text-black">App Development</option>
                    <option value="Backend Development" className="text-black">Backend Development</option>
                    <option value="App Maintenance" className="text-black">App Maintenance</option>
                    <option value="Web Development" className="text-black">Web Development</option>
                  </select>
                </div>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Phone Number*</label>
                <input type="tel" className="cs-form_field" required value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Project Details*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
                {status && <Div className="col-sm-12"><p>{status}</p></Div>}
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.331582277941!2d-97.75747352379062!3d30.341525004432903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cae2feb064b3%3A0xfbcc19243aa6ddc0!2sSyner%20Supplements%2C%205900%20Balcones%20Dr%2C%20Austin%2C%20TX%2078731!5e0!3m2!1sen!2sus!4v1730203293615!5m2!1sen!2sus" allowfullscreen loading="lazy" ></iframe>
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
