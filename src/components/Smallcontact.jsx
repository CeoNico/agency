import Button from "./Button"


const smallContact = () => {
  return (
    <div className='bg-black h-24 w-screen flex items-center justify-between p-4'>
        <p className='text-white text-sm '>Te gustaria saber mas? <br className="lg:hidden"/> Contactanos Ahora</p>
        <Button title={"Apretar Aqui"} href="/" bg="bg-orange-500" />
    </div>
  )
}

export default smallContact