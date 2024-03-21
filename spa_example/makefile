SHELL := /bin/bash

.PHONY: start
start: start_host start_product_a start_product_b

start_host:
	cd host && pnpm run start
start_product_a:
	cd product_A && pnpm run start
start_product_b:
	cd product_B && pnpm run start

install: install_host install_product_a install_product_b

install_host:
	cd host && pnpm install
install_product_a:
	cd product_A && pnpm install
install_product_b:
	cd product_B && pnpm install
