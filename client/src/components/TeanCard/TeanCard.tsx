import { SocialNetworkEnum, IconColorEnum, SocialMediaComponent } from "../SocialMediaComponent/SocialMediaComponent";

interface params {
  image: string;
  name: string;
  role: string;
  jobDescription: string;
}

export const TeanCard: (params: params) => JSX.Element = (params: params) => {
  return (
    <article className='max-w-[280px] px-12 flex flex-col items-center'>
      <img src={params.image} className='m-4 rounded-full w-[80px]' />
      <section className='text-center'>
        <div className='my-2'>
          <p className='font-bold'>{params.name}</p>
          <p className='text-[#C9CED4]'>{params.role}</p>

        </div>
        <p className='text-center text-[#475467]'>
          {params.jobDescription}
        </p>
        <SocialMediaComponent
          className='flex justify-center gap-2 py-4'
          socialNetworks={
            [
              SocialNetworkEnum.facebook,
              SocialNetworkEnum.instagram,
              SocialNetworkEnum.twitter
            ]
          }
          color={IconColorEnum.black}
        />
      </section>
    </article>
  )
}