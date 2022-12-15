import { NextPage } from "next";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import JavidImg from "../public/images/javid.jpg";
import KamranImg from "../public/images/kamran.jpg";
import PhilImg from "../public/images/phil.jpg";
import { ContactFrom } from "../components/contactUs";

const ContactUsPage: NextPage = () => {
  return (
    <div className="container max-w-xl mx-auto py-12 md:max-w-4xl">
      <h1 className="text-4xl font-medium">
        Please get in touch and our expert support team will answer all your
        questions.
      </h1>
      <div className="content flex md:flex-row flex-col gap-x-6 mt-12">
        <div className="max-w-xl">
          <ContactFrom />
        </div>
        <div className="max-w-xl mt-8 md:mt-0">
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-center text-2xl">
              Meet our brilliant and knowledgeable support team
            </h2>
            <div className="divide-y">
              <div className="font-thin text-sm py-6">
                Live Support is available Mon-Fri 5am-7pm ET / 10am-Midnight GMT
              </div>
              <div className="flex gap-6 py-6">
                {[JavidImg, PhilImg, KamranImg].map((src, index) => (
                  <div key={index} className="h-40 w-auto">
                    <Image
                      src={src}
                      alt=""
                      placeholder="blur"
                      className="h-full w-full object-cover rounded-full aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="font-medium text-2xl">
              Follow us on social and be part of the conversation
            </h2>
            <div className="flex justify-center gap-6 mt-8">
              {["telegram", "twitter", "instagram", "facebook"].map(
                (network, index) => (
                  <SocialIcon key={index} url="#" network={network} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
