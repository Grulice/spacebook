import { NextPage } from "next";
import { SocialIcon } from "react-social-icons";

const ContactUsPage: NextPage = () => {
  return <div className='container max-w-xl mx-auto py-12 md:max-w-4xl'>
    <div>
      <h1 className='text-4xl font-medium'>Please get in touch and our expert support team will answer all your
        questions.
      </h1>
    </div>
    <div className='content flex md:flex-row flex-col gap-x-6 mt-12'>
      <div className='max-w-xl'>
        <div className="flex flex-col gap-8">
          <label htmlFor="" className="block">
            <span className="text-gray-700">Full name</span>
            <input type="text" className="mt-1 block w-full" placeholder=""/>
          </label>
          <label htmlFor="" className="block">
            <span className="text-gray-700">Email</span>
            <input type="email" className="mt-1 block w-full" placeholder="john@example.com"/>
          </label>
          <label htmlFor="" className="block">
            <span className="text-gray-700">Your message</span>
            <textarea className="mt-1 block w-full"></textarea>
          </label>
          <button className="thd-button-secondary bg-[#1da1f2] text-white text-xl font-medium p-2 rounded">Send</button>
        </div>
      </div>
      <div className="max-w-xl mt-8 md:mt-0">
        <div className="flex flex-col justify-center">
        <h2 className="font-medium text-center text-2xl">Meet our brilliant and knowledgeable support team</h2>
          <div className="divide-y">
            <div className="font-thin text-sm py-6">Live Support is available Mon-Fri 5am-7pm ET / 10am-Midnight GMT</div>
            <div className="flex gap-6 py-6">
              <div className="h-40 w-auto">
                <img className="h-full w-full object-cover rounded-full aspect-square" src="javid.jpg" alt="" />
              </div>
              <div className="h-40 w-auto">
                <img className="h-full w-full object-cover rounded-full aspect-square" src="phil.jpg" alt="" />
              </div>
              <div className="h-40 w-auto">
                <img className="h-full w-full object-cover rounded-full aspect-square" src="kamran.jpg" alt="" />
              </div>
              
            </div>
          </div>
             
        </div>
        <div className="content">
          <h2 className="font-medium text-2xl">Follow us on social and be part of the conversation</h2>
          <div className="flex justify-center gap-6 mt-8">
            <SocialIcon url="#" network="telegram"/>
            <SocialIcon url="#" network="twitter"/>
            <SocialIcon url="#" network="instagram"/>
            <SocialIcon url="#" network="facebook"/>
          </div>
        </div>
        </div>
    </div>
  </div>;
};

export default ContactUsPage;
