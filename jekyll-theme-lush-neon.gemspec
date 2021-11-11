# coding: utf-8
Gem::Specification.new do |spec|
  spec.name                    = "jekyll-theme-lush-neon"
  spec.version                 = "1.0.0"
  spec.authors                 = ["Alexander Abraham"]
  spec.summary                 = %q{A homage to the 80s and neon lights.}
  spec.homepage                = "https://github.com/iamtheblackunicorn/lush-neon"
  spec.license                 = "MIT"
  spec.metadata["plugin_type"] = "theme"
  spec.files                   = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end
end
