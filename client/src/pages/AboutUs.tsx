import { AboutHeaderSection, MetricsSection, WhoAreUs } from "../components"

export const AboutUs = () => {
  return (
    <div className='relative min-h-full' >
      <AboutHeaderSection />
      <WhoAreUs/>
      <MetricsSection />
    </div>
  )
}