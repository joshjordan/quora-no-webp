var imgs = document.getElementsByTagName('img')
for(var i = 0; i < imgs.length; i++)
{
  imgs[i].src = imgs[i].src.replace('convert_to_webp=true', '')
}