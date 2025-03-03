using System;
using System.Collections.Generic;

namespace HelpDeskAPI.Entities;

public partial class Ticket
{
    public int Id { get; set; }

    public int? CustomerId { get; set; }

    public string ContactEmail { get; set; } = null!;

    public string Title { get; set; } = null!;

    public string Body { get; set; } = null!;

    public bool TicketOpen { get; set; }

    public bool? Bookmarked { get; set; }

    public int? ResolutionId { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual Resolution? Resolution { get; set; }
}
