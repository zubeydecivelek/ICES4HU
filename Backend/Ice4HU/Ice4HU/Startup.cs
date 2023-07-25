using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Ice4HU.Startup))]
namespace Ice4HU
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
