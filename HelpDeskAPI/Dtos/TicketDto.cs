namespace HelpDeskAPI.Dtos
{
    public class TicketDto
    {
        public int? CustomerId { get; set; }

        public string Title { get; set; } = null!;

        public string Body { get; set; } = null!;

    }
}
