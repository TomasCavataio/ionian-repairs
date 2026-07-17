import { copyFile, mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const dist = resolve('dist')
const entry = resolve(dist, 'index.html')
const routes = ['el', 'privacy', 'el/privacy']

await Promise.all(routes.map(async (route) => {
  const directory = resolve(dist, route)
  await mkdir(directory, { recursive: true })
  await copyFile(entry, resolve(directory, 'index.html'))
}))

await copyFile(entry, resolve(dist, '404.html'))
await writeFile(resolve(dist, '.nojekyll'), '')

console.log('Static route entries generated for GitHub Pages.')
