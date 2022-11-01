SD_GRPC_REPO?=../../stable-diffusion-grpcserver
ifndef SD_GRPC_REPO
  $(error "must set SD_GRPC_REPO to path of stable-diffusion-grpcserver repository)
endif

PROTO_SOURCE=$(SD_GRPC_REPO)/sdgrpcserver/proto
PROTO_DEST=./src/proto/

PROTOC_GEN_ES_PATH=./node_modules/.bin/protoc-gen-es
PROTOC_GEN_CONNECT_WEB_PATH=./node_modules/.bin/protoc-gen-connect-web

.PHONY: $(PROTO_DEST)
$(PROTO_DEST): $(PROTOC_GEN_JS_PATH) $(PROTOC_GEN_GRPC_WEB_PATH)
	rm -rf $(PROTO_DEST)
	mkdir -p $(PROTO_DEST)
	protoc -I=$(PROTO_SOURCE) $(PROTO_SOURCE)/*.proto \
		--plugin="protoc-gen-es=$(PROTOC_GEN_ES_PATH)" \
		--plugin="protoc-gen-connect-web=$(PROTOC_GEN_CONNECT_WEB_PATH)" \
		--es_out=$(PROTO_DEST) --es_opt=target=ts \
		--connect-web_out=$(PROTO_DEST) --connect-web_opt=target=ts

.PHONY: dist/
dist/:
	rm -rf dist/
	./node_modules/.bin/rollup --configPlugin typescript --config rollup.config.ts
