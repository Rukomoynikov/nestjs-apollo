import { FC, JSX } from "react";

interface Props {
  children: string | JSX.Element | JSX.Element[],
  link?: {text: string, href: string}
}
export const SignInUpScreen: FC<Props> = ({children, link}) => {
  return <>
    <div className={'antialiased container'}>
      <div className={'overflow-hidden rounded-[0.5rem] border bg-background shadow my-5'}>
        <div className={'container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'}>
          {link &&
            <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8" href={link.href}>{link.text}</a>
          }
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"><div className="absolute inset-0 bg-zinc-900"></div><div className="relative z-20 flex items-center text-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-6 w-6"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>Acme Inc</div><div className="relative z-20 mt-auto"><blockquote className="space-y-2"><p className="text-lg">“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”</p><footer className="text-sm">Sofia Davis</footer></blockquote></div></div>
          <div className={'lg:p-8'}>
            <div className={'mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'}>
              <div className="flex flex-col space-y-2 text-center"><h1 className="text-2xl font-semibold tracking-tight">Create an account</h1><p className="text-sm text-muted-foreground">Enter your email below to create your account</p></div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}