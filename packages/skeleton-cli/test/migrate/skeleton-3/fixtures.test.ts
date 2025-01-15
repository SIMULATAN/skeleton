import { fileURLToPath, resolve } from 'node:url';
import { describe, expect, test } from 'vitest';
import { readFile } from 'node:fs/promises';
import { transformSvelte } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-svelte.js';
import { transformModule } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-module.js';
import { transformTailwindConfig } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-tailwind-config.js';
import { transformApp } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-app.js';
import { transformPackage } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-package.js';

const TRANSFORMER_MAP = {
	svelte: transformSvelte,
	module: transformModule,
	'tailwind-config': transformTailwindConfig,
	app: transformApp,
	package: transformPackage
};

const fixturesTest = import.meta.glob('./fixtures/**/*', {
	query: '?raw'
});

function getResult(code: string, transformer: keyof typeof TRANSFORMER_MAP) {
	switch (transformer) {
		case 'svelte':
		case 'module':
		case 'tailwind-config':
			return TRANSFORMER_MAP[transformer](code).code;
		case 'app':
			return TRANSFORMER_MAP[transformer](code, 'cerberus').code;
		case 'package':
			return TRANSFORMER_MAP[transformer](code, '3.0.0', '1.0.0').code;
	}
}

const testCases: Record<string, { name: string; path: string }[]> = {};

for (const path of Object.keys(fixturesTest)) {
	const name = path.split('/').at(-1);
	const transformerName = path.split('/').at(-2) as keyof typeof TRANSFORMER_MAP | undefined;
	if (!name || !transformerName || !(transformerName in TRANSFORMER_MAP)) {
		continue;
	}
	if (!testCases[transformerName]) {
		testCases[transformerName] = [];
	}
	testCases[transformerName].push({ name, path });
}

describe('fixtures', () => {
	for (const [transformerName, cases] of Object.entries(testCases)) {
		describe(transformerName, () => {
			for (const { name, path } of cases) {
				test(name, async () => {
					const result = getResult(
						await readFile(resolve(fileURLToPath(import.meta.url), path), 'utf-8'),
						transformerName as keyof typeof TRANSFORMER_MAP
					);
					const expected = await readFile(resolve(fileURLToPath(import.meta.url), path.replace('fixtures', 'results')), 'utf-8');
					expect(result.trim()).toEqual(expected.trim());
				});
			}
		});
	}
});
