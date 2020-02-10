﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Happnin.ClientApi;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Happnin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : Controller
    {
        private IHttpClientFactory ClientFactory { get; }

        public EventController(IHttpClientFactory clientFactory)
        {
            ClientFactory = clientFactory ?? throw new ArgumentNullException(nameof(clientFactory));
        }

        // GET: Event
        [HttpGet]
        public async Task<IEnumerable<Event>> Get()
        {
            var httpClient = ClientFactory.CreateClient("Happnin.Api");
            var client = new EventClient(httpClient);
            ICollection<Event> events = await client.GetAllAsync();
            return events; 
        }

    //     // GET: Event
    //     public ActionResult Index()
    //     {
    //         return View();
    //     }

    //     // GET: Event/Details/5
    //     public ActionResult Details(int id)
    //     {
    //         return View();
    //     }

    //     // GET: Event/Create
    //     public ActionResult Create()
    //     {
    //         return View();
    //     }

    //     // POST: Event/Create
    //     [HttpPost]
    //     [ValidateAntiForgeryToken]
    //     public ActionResult Create(IFormCollection collection)
    //     {
    //         try
    //         {
    //             // TODO: Add insert logic here

    //             return RedirectToAction(nameof(Index));
    //         }
    //         catch
    //         {
    //             return View();
    //         }
    //     }

    //     // GET: Event/Edit/5
    //     public ActionResult Edit(int id)
    //     {
    //         return View();
    //     }

    //     // POST: Event/Edit/5
    //     [HttpPost]
    //     [ValidateAntiForgeryToken]
    //     public ActionResult Edit(int id, IFormCollection collection)
    //     {
    //         try
    //         {
    //             // TODO: Add update logic here

    //             return RedirectToAction(nameof(Index));
    //         }
    //         catch
    //         {
    //             return View();
    //         }
    //     }

    //     // GET: Event/Delete/5
    //     public ActionResult Delete(int id)
    //     {
    //         return View();
    //     }

    //     // POST: Event/Delete/5
    //     [HttpPost]
    //     [ValidateAntiForgeryToken]
    //     public ActionResult Delete(int id, IFormCollection collection)
    //     {
    //         try
    //         {
    //             // TODO: Add delete logic here

    //             return RedirectToAction(nameof(Index));
    //         }
    //         catch
    //         {
    //             return View();
    //         }
    //     }
    }
}