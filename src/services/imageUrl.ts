import  noImagePlaceHolder from '../assets/Image Placeholder/no-image-placeholder.webp';
export default function CropImageUrl(url: string){
    if(!url) return noImagePlaceHolder;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;

    return url.slice(0,index) + "crop/600/400/" + url.slice(index);
}