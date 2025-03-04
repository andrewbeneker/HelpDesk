using System;
using System.Collections.Generic;

namespace HelpDeskAPI.Entities;

public partial class Ticket
{
    public int Id { get; set; }

    public int? CustomerId { get; set; }

    public string Title { get; set; } = null!;

    public string Body { get; set; } = null!;

    public bool TicketOpen { get; set; }

    public int? ResolvedBy { get; set; }

    public virtual ICollection<Bookmark> Bookmarks { get; set; } = new List<Bookmark>();

    public virtual Customer? Customer { get; set; }

    public virtual HelpAgent? ResolvedByNavigation { get; set; }
}
