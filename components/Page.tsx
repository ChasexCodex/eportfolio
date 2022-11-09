export default function Page({children, className, ...props}: any) {
  return (
    <div className={'flex flex-col w-screen min-h-screen ' + className} {...props}>
      {children}
    </div>
  )
}