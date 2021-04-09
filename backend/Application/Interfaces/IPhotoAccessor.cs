using System.Threading.Tasks;
using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IPhotoAccessor
    {
        // these methods are for uploading and deleting images in cloudinary
         Task<PhotoUploadResult> AddPhoto(IFormFile file);
         Task<string> DeletePhoto(string publicId);
    }
}