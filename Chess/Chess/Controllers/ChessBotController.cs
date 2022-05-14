using Microsoft.AspNetCore.Mvc;

namespace Chess.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChessBotController : ControllerBase
    {

        private readonly ILogger<ChessBotController> _logger;

        public ChessBotController(ILogger<ChessBotController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetNextMove")]
        public async Task<IActionResult> GetNextMove()
        {
            return Ok();
        }
    }
}