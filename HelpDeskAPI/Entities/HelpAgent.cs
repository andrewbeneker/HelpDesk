using System;
using System.Collections.Generic;

namespace HelpDeskAPI.Entities;

public partial class HelpAgent
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Bookmark> Bookmarks { get; set; } = new List<Bookmark>();

    public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}
