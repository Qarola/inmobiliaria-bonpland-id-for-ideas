interface Params {
  dataService: {
    icon: JSX.Element;
    paragraph: string;
  }
}

export const Service = ({ dataService }: Params) => {
  return (
    <article className='max-w-[288px] py-8'>
      {dataService.icon}
      <p className='mt-4 text-[18px]'>
        {dataService.paragraph}
      </p>
    </article>
  )
}