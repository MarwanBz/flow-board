'use client'

import { BackgroundBeam } from '@/components/background-beam';
import Image from 'next/image';
import { SignUp } from "@clerk/nextjs";

export default function CustomSignUpPage() {
  return (  
    <div className="relative min-h-screen min-w-full  text-black overflow-hidden flex items-center justify-center">
      <BackgroundBeam />
      <div className="z-10 w-full max-w-md p-8 rounded-lg bg-gray-200 bg-opacity-90 backdrop-blur-md">
        <div className="mb-8 text-center">
          <Image
            src="/assets/logo-shape.svg"
            alt="Taskio"
            width={60}
            height={56}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2 gradient-text">Create an account</h1>
          <p className="text-gray-700">Sign up to get started with Taskio</p>
        </div>
        
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 
                'bg-blue-500 hover:bg-blue-600 text-white transition-colors py-2 px-4 rounded-md',
              card: 'bg-transparent shadow-none',
              headerTitle: 'hidden',
              headerSubtitle: 'hidden',
              socialButtonsBlockButton: 
                'bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700',
              socialButtonsBlockButtonText: 'text-white',
              formFieldInput: 
                'bg-gray-800 border-gray-700 text-white placeholder-gray-400',
              footerActionLink: 'text-blue-400 hover:text-blue-300',
            },
          }}
        />
      </div>
    </div>
  );
}
