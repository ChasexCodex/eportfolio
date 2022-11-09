export default function Page({children, className}: any) {
  return (
    <div className={'flex flex-col w-screen min-h-screen ' + className}>
      {children}
    </div>
  )
}