using System;
using System.Text.Json.Serialization;

namespace Application.Profiles
{
    public class UserActivityDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
        
        [JsonIgnore] // we use this field for help, but we don't want to show it
        public string HostUsername { get; set; }
    }
}