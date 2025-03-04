namespace HelpDeskAPI.Dtos
{
    public class BookmarkDto
    {
        public int? TicketId { get; set; }
        public string Description { get; set; } = null!;
        public int? HelpAgentId { get; set; }
    }
}
