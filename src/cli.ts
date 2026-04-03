import {Command} from 'commander';

const program = new Command();

program
	.name('judex')
	.description('Budget-aware AI CLI orchestrator')
	.version('0.1.0');

program
	.command('run')
	.argument('<task>', 'task to execute')
	.option(
		'-m, --mode <mode>',
		'cheap | balanced | careful | critical',
		'balanced',
	)
	.action((task, options) => {
		console.log('task:', task);
		console.log('mode:', options.mode);
	});

await program.parseAsync();
