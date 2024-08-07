import data from '../mock/data.json';

const h3Class = 'font-semibold text-[20px] mb-5 text-balance';
const pClass = 'text-[14px] leading-[1.6]';

const JoinUs = () => {
  const { title, images, text } = data['section-seven'];

  return (
    <div id='comenzar'>
      <h2 className='subtitle title-gradient'>{title}</h2>
     
      {/* text */}
      <div className='w-full grid  md:grid-cols-2 gap-6 mt-12'>
        <div className='flex flex-col min-h border border-gray-600 rounded-lg p-4 bg-white'>
          <img
            src={images[0]}
            alt='unete a nosotros'
            className='rounded-md object-cover w-full h-full max-h-[400px] mb-8'
          />

          <h3 className={h3Class}>{text.one.title}</h3>
          <p className={pClass}>{text.one.desc}</p>
        </div>

        <div className='flex flex-col min-h border border-gray-600 rounded-lg p-4 bg-white'>
          <img
            src={images[1]}
            alt='unete a nosotros'
            className='rounded-md object-cover w-full h-full max-h-[400px] mb-8'
          />
          <h3 className={h3Class}>{text.two.title}</h3>
          <p className={pClass}>{text.two.desc}</p>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
