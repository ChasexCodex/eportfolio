export default function Page({children, className}: any) {
  return (
    <div className={'flex flex-col max-w-screen min-w-screen min-h-screen ' + className}>
      {children}
    </div>
  )
}