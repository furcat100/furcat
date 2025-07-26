import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { Heart } from 'lucide-react';

const cloudName = 'dxpm4uj4t';

const publicIds = [
  'IMG_2464_wiqnle',
  'IMG_2460_xuqd0t',
  'IMG_2465_awde3i',
  'IMG_2274_cmchxt',
  'IMG_2474_jd0lnz',
  'IMG_2457_ylfynv',
  'IMG_2119_pntsdl',
  '15CECF81-8849-4C2C-8FC9-1C52C0B0E8E1_filb1t',
  '2ABB8478-9179-492B-9752-1ABBF465E67E_embezp',
  '461eb381-c57d-4d70-b261-6fa3911390cc_wl74jj',
  'f8528351-0c56-4830-9566-4b11caf53b61_cyzt4d',
  'f57ef62b-a423-43ef-bb5d-f7bc0ba34d13_tpgabd',
  'f16aaa83-863b-409b-b035-524b0744bdf6_ntybnf',
  '77724a08-51da-4db3-b39b-83b54a88b2f0_g6dalw',
  '98f48199-9824-45ce-8968-fae853639f20_kwiqqz',
  '13f46597-f1b4-4f92-a203-0de11b8f5b6e_o7dloh',
  '20f12331-2676-4c63-9050-4f08e8972908_tmq4fk',
  '1f146697-43b7-435b-abb9-3e6c7ec36429_gkiahw',
];
const CatGalleryCloudinary = ({ onImageClick, limit }) => {
  const cld = new Cloudinary({ cloud: { cloudName } });

  // Slice the array based on the limit prop
  const visibleIds = limit ? publicIds.slice(0, limit) : publicIds;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {visibleIds.map((id, index) => {
        const img = cld
          .image(id)
          .format('auto')
          .quality('auto')
          .resize(auto().gravity(autoGravity()).width(500).height(500));

        const url = `https://res.cloudinary.com/${cloudName}/image/upload/${id}.jpg`;

        return (
          <div 
            key={index} 
            className="group cursor-pointer text-center"
            onClick={() => onImageClick(url)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              <AdvancedImage 
                cldImg={img}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt={`Cat ${index + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default CatGalleryCloudinary;
