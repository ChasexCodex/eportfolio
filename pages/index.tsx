import MaskedImage from '../components/MaskedImage'

export default function Home() {
  return (
      <div className="flex flex-col max-w-screen min-w-screen min-h-screen">
        <nav className="w-full border-b py-4">
          <ul className="flex flex-row w-full justify-around font-bold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">CV</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <main className="flex flex-col py-10">
          <div className="border-b">
            <p className="text-center text-6xl font-extrabold py-8">Elyas Al-Amri</p>
            <p className="italic text-2xl text-center">Certified Computer Professional</p>
          </div>
          <div className="pt-10 flex justify-center items-center">
            <MaskedImage width="810" height="1080"
                         src1="images/profile/normal.jpg"
                         src2="images/profile/cipher.png"/>
            {/*<Image alt="Profile Image" src="/images/profile/normal_profile.jpg" width={405} height={540}/>*/}
          </div>
        </main>
      </div>
  )
}
