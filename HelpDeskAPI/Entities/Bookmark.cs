﻿using System;
using System.Collections.Generic;

namespace HelpDeskAPI.Entities;

public partial class Bookmark
{
    public int Id { get; set; }

    public int? TicketId { get; set; }

    public string Description { get; set; } = null!;

    public int? HelpAgentId { get; set; }

    public virtual HelpAgent? HelpAgent { get; set; }

    public virtual Ticket? Ticket { get; set; }
}
