import { ContactSection } from "../components/ContactSection/ContactSection"
import mapImage from '../assets/images/mapImage.png'

export const Contact = () => {
  return (
    <div className='relative min-h-full' >
      <ContactSection />
      <img
        src={mapImage}
        className='mx-auto my-8'
      />
    </div>
  )
}