<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" indent="yes"/>

<xsl:template match="/">
	<html lang="id">
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<title>Sitemap - Fabrik Safety</title>
		<style>
			:root {
				--bg: #f8fafc;
				--surface: #ffffff;
				--border: #e2e8f0;
				--text: #1e293b;
				--text-muted: #64748b;
				--accent: #045b8b;
				--accent-light: #e6f3fa;
			}

			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
				background: var(--bg);
				color: var(--text);
				line-height: 1.6;
				padding: 2rem 1rem;
			}

			.container {
				max-width: 900px;
				margin: 0 auto;
			}

			header {
				text-align: center;
				margin-bottom: 3rem;
				padding-bottom: 2rem;
				border-bottom: 1px solid var(--border);
			}

			.logo {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.75rem;
				margin-bottom: 1rem;
			}

			.logo img {
				height: 40px;
				width: auto;
			}

			h1 {
				font-size: 2rem;
				font-weight: 700;
				margin-bottom: 0.5rem;
				color: var(--text);
			}

			.subtitle {
				color: var(--text-muted);
				font-size: 0.9375rem;
			}

			.stats {
				display: flex;
				gap: 2rem;
				justify-content: center;
				margin-top: 1.5rem;
				flex-wrap: wrap;
			}

			.stat {
				background: var(--accent-light);
				padding: 0.75rem 1.25rem;
				border-radius: 8px;
				font-size: 0.875rem;
			}

			.stat-label {
				color: var(--text-muted);
				font-size: 0.75rem;
				text-transform: uppercase;
				letter-spacing: 0.05em;
				margin-bottom: 0.25rem;
			}

			.stat-value {
				font-weight: 600;
				color: var(--accent);
				font-size: 1.25rem;
			}

			.url-list {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;
			}

			.url-item, .sitemap-item {
				background: var(--surface);
				border: 1px solid var(--border);
				border-radius: 10px;
				padding: 1rem 1.25rem;
				transition: all 0.2s ease;
			}

			.url-item:hover, .sitemap-item:hover {
				border-color: var(--accent);
				box-shadow: 0 4px 12px rgba(4, 91, 139, 0.1);
			}

			.url-loc, .sitemap-loc {
				font-size: 1rem;
				font-weight: 500;
				margin-bottom: 0.5rem;
			}

			.url-loc a, .sitemap-loc a {
				color: var(--accent);
				text-decoration: none;
			}

			.url-loc a:hover, .sitemap-loc a:hover {
				text-decoration: underline;
			}

			.url-meta, .sitemap-meta {
				display: flex;
				gap: 1.5rem;
				flex-wrap: wrap;
				font-size: 0.8125rem;
			}

			.meta-item {
				display: flex;
				align-items: center;
				gap: 0.375rem;
			}

			.meta-label {
				color: var(--text-muted);
			}

			.meta-value {
				color: var(--text);
				font-weight: 500;
			}

			.priority-high {
				color: #16a34a;
			}

			.priority-medium {
				color: #d97706;
			}

			.priority-low {
				color: #6b7280;
			}

			.type-badge {
				display: inline-block;
				padding: 0.25rem 0.75rem;
				background: var(--accent-light);
				color: var(--accent);
				border-radius: 6px;
				font-size: 0.75rem;
				font-weight: 600;
				margin-left: 0.5rem;
			}

			footer {
				text-align: center;
				margin-top: 3rem;
				padding-top: 2rem;
				border-top: 1px solid var(--border);
				color: var(--text-muted);
				font-size: 0.875rem;
			}

			footer a {
				color: var(--accent);
				text-decoration: none;
				font-weight: 500;
			}

			footer a:hover {
				text-decoration: underline;
			}

			@media (max-width: 640px) {
				h1 {
					font-size: 1.5rem;
				}

				.stats {
					flex-direction: column;
					gap: 0.75rem;
				}

				.url-meta, .sitemap-meta {
					flex-direction: column;
					gap: 0.5rem;
				}
			}
		</style>
	</head>
	<body>
		<div class="container">
			<header>
				<div class="logo">
					<img src="/fs-logo.png" alt="Fabrik Safety"/>
				</div>
				<h1><xsl:choose>
					<xsl:when test="//sitemap:sitemapindex">Sitemap Index</xsl:when>
					<xsl:otherwise>Sitemap</xsl:otherwise>
				</xsl:choose></h1>
				<p class="subtitle">fabriksafety.com — Daftar halaman website</p>
				<div class="stats">
					<xsl:choose>
						<xsl:when test="//sitemap:sitemapindex">
							<div class="stat">
								<div class="stat-label">Total Sitemaps</div>
								<div class="stat-value"><xsl:value-of select="count(//sitemap:sitemap)"/></div>
							</div>
						</xsl:when>
						<xsl:otherwise>
							<div class="stat">
								<div class="stat-label">Total Halaman</div>
								<div class="stat-value"><xsl:value-of select="count(//sitemap:url)"/></div>
							</div>
						</xsl:otherwise>
					</xsl:choose>
				</div>
			</header>

			<main class="url-list">
				<!-- Sitemap Index: List of sitemaps -->
				<xsl:for-each select="//sitemap:sitemap">
					<article class="sitemap-item">
						<div class="sitemap-loc">
							<a>
								<xsl:attribute name="href">
									<xsl:value-of select="sitemap:loc"/>
								</xsl:attribute>
								<xsl:choose>
									<xsl:when test="contains(sitemap:loc, 'sitemap-0')">
										Pages Sitemap
									</xsl:when>
									<xsl:when test="contains(sitemap:loc, 'blog')">
										Blog Sitemap
									</xsl:when>
									<xsl:when test="contains(sitemap:loc, 'portfolio')">
										Portfolio Sitemap
									</xsl:when>
									<xsl:otherwise>
										<xsl:value-of select="sitemap:loc"/>
									</xsl:otherwise>
								</xsl:choose>
							</a>
						</div>
						<div class="sitemap-meta">
							<div class="meta-item">
								<span class="meta-label">Terakhir diperbarui:</span>
								<span class="meta-value"><xsl:value-of select="sitemap:lastmod"/></span>
							</div>
						</div>
					</article>
				</xsl:for-each>

				<!-- Regular Sitemap: List of URLs -->
				<xsl:for-each select="//sitemap:url">
					<xsl:sort select="sitemap:priority" order="descending"/>
					<xsl:sort select="sitemap:loc"/>
					<article class="url-item">
						<div class="url-loc">
							<a>
								<xsl:attribute name="href">
									<xsl:value-of select="sitemap:loc"/>
								</xsl:attribute>
								<xsl:value-of select="sitemap:loc"/>
							</a>
							<xsl:if test="contains(sitemap:loc, '/blog/')">
								<span class="type-badge">Blog</span>
							</xsl:if>
							<xsl:if test="contains(sitemap:loc, '/portfolio/')">
								<span class="type-badge">Portfolio</span>
							</xsl:if>
						</div>
						<div class="url-meta">
							<div class="meta-item">
								<span class="meta-label">Terakhir diperbarui:</span>
								<span class="meta-value"><xsl:value-of select="sitemap:lastmod"/></span>
							</div>
						</div>
					</article>
				</xsl:for-each>
			</main>

			<footer>
				<p><a href="/">Kembali ke fabriksafety.com</a></p>
			</footer>
		</div>
	</body>
	</html>
</xsl:template>

</xsl:stylesheet>
