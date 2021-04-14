using System.Text.Json;
using Microsoft.AspNetCore.Http;

namespace API.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalPages)
        {
            var paginationHeader = new 
            {
                currentPage,
                itemsPerPage,
                totalItems,
                totalPages
            };
            response.Headers.Add("Pagination", JsonSerializer.Serialize(paginationHeader));
            // because this is a custom header
            // we need to specificly expose this to our browser will be able to read it
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}