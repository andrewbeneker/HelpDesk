using System;
using System.Collections.Generic;

namespace HelpDeskAPI.Entities;

public partial class Bookmark
{
    public int Id { get; set; }

    public int? TicketId { get; set; }

    public string Description { get; set; } = null!;

    public virtual Ticket? Ticket { get; set; }
}
