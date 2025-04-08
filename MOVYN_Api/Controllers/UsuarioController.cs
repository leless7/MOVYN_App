using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MOVYN_Api.Context;


[Route("api/[controller]")]
[ApiController]
public class UsuarioController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsuarioController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("GetUsuario")]
    [IgnoreAntiforgeryToken]
    public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuario()
    {
        return await _context.Usuario.ToListAsync();
    }

    [HttpPost("Login")]
    [IgnoreAntiforgeryToken]
    public async Task<ActionResult<Usuario>> Login([FromBody] Usuario usuario)
    {
        var user = await _context.Usuario
            .FirstOrDefaultAsync(u => u.Nome == usuario.Nome && u.Senha == usuario.Senha);

        if (user == null)
            return NotFound("Usuário ou senha inválidos.");

        return Ok(user);
    }
}