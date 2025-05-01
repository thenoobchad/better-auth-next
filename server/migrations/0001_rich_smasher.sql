ALTER TABLE `users` ADD `username` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `password` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `users_password_unique` ON `users` (`password`);--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `name`;