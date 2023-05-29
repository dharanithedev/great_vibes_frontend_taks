import React from "react";

const Card = () => {
  const netflixLogoBase64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB1VpLaxRBEK7u2c3mBUqiGKNGwcdFFD15NHoRIgFFxWPyE/wHyX/xkFMkXrxEiDcRBAVFvQi+ghiIWXST7GZnuv1qH5rsTq8wXRNmvlC7w/Skp76pr7qre5boHyZhK7ANmM2wsY8z1IH5DDr6P5tvOz+bcUd72SS1QpIXhzttRbUO8opy3glQgRLijC7QlO6LbXtPES2Hta7z00GJSqS6zlucWgyrlASJCYyTpgfF/liHthDUS9EObdq9wb2nS3RAdV8fwRYpGQFNHlgz8eobBKlrjuhIIzEBdv2ndafPzSDjBBgVENh0kLiuizQQIxdpeBEowr/PDhkNw/n7SNq04UWA/3m9h4ym90FGXgQYIRkqO0hcgYxGlfctesK79xKk8tUhI86A27ujkEJKeBPgieSTMYhDPO4G/X+PbQpzvjcB7oCT+YfDuws6oHOqOV+aFKoWEYEOgsC3yDjbp4Ji4zsieYgQYJWvIgI7jgd8I2gWHHWrxaMgQkDDKe5o1SGji5DRZYxIdVxnhDNZhIDC3wD8+mLcIrlT6KMaCIRZjAA/0xI+1g3LKN7BW6hE68QyUqIyEptlOE0DzAnfHb4dRNsYblezXAjKyUiMAHfUryx9iNwyOotc4GVOSHIQJcBjzQYkVHVE4USgICH3aJX0viJgURQRAS6hP5r4OYFlNor2WmM0koFopRWABhcOL0zdec3xQCNCKpsEuLM+hOKVCemdjc+Fk0o3xiCp4TQVAgXYEyzq48DtEywjREGCgnixzs+Xtf40cstoXGvaFkpkcQKcB9zpG+TBWxs/YI5pRaElkTxIIQKw1jy1EMbLiJtPIZlr5I9U1nu6JY+lqOactCbAQkJGqRBo76aUraGXDhmNIA8kNmbTWXHv8upx6BbKETD1LSvS3TIAHmE4/e2oUE+jNvItK1InUIGMnpv45zwMDQ157t6lToCxZNwyGs0DgZUeMhpHaeEjo30h8AvOLziiwCu5EY/dO3ECprHu7cYyolAFkebD3lsHHdLJZZR4KD6mAjoPK8PlNThWwfcWetom27NDHv2HcNfDOOJ9U35jcxTHD6Nkb2hy/5KPJVSmHIMJvKb84hl/TFL238i7bKbNZC4HznbaHHVglrL/u4mNlo9X207/AUNAMRj+pSlCAAAAAElFTkSuQmCC"; // Replace with the base64-encoded image data

  return (
    <div className="border border-gray-300 rounded-lg max-w-[830px] mx-auto">
      <div className="max-h-[320px] py-4 px-6">
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-start">
            <img
              src={netflixLogoBase64}
              alt="Netflix Logo"
              className="h-12 w-12 mr-2"
            />
            <div>
              <h2 className="text-2xl font-normal font-semibold text-black leading-8">UX UI Designer</h2>
              <p className="text-base font-normal leading-6 text-black">
                Great Vibes - Information Technology
              </p>
              <p className="text-base font-normal leading-6 text-gray-600 mb-6">
                Chennai, Tamilnadu, India (In-office)
              </p>

              <p className="text-base font-normal leading-6 text-black mb-2">Part-Time (9.00 am - 5.00 pm IST)</p>
              <p className="text-base font-normal leading-6 text-black mb-2">Experience (1 - 2 years)</p>
              <p className="text-base font-normal leading-6 text-black mb-2">INR (₹) 30,000 - 50,000 / Month</p>
              <p className="text-base font-normal leading-6 text-black mb-2">51-200 employees</p>
              <div className="flex justify-start space-x-4 mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
