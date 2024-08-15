== Kullanım Örneği 

Örnek bir feature oluşturma komutu aşağıdaki gibidir:

----
new-feature --name deneme --modulePath /Users/john-doe/ozguryazilim/project-name/modules/sample/directory_name/sample --artifactId telve-deneme --url feature_url --packagePath deneme/features --includeEndpoint --endpointPath feature_endpoint_path --includeImpl --implPath sub_path  --implType MONGO --abilities OWNABLE,ASSIGNABLE membershipAbilities CRUDABLE --createPom --parentArtifactId parent_artifact_id --feeder
----

* *Feature oluşturmak ile ilgili daha fazla detay için xref:ROOT:feature.adoc[Feature] dokümanını inceleyiniz.

Örnek bir modül oluşturma komutu aşağıdaki gibidir:

----
new-module --name sample --path /Users/john-doe/ozguryazilim/project-name/modules --groupId com.ozguryazilim --artifactId project-template --url deneme_url --subPackageName samples --parentGroupId com.ozguryazilim.parent --parentArtifactId project-template-parent --directoryName directory_name --subModules REST,MONGO,CUSTOM_MODULE
----

* *Modül oluşturmak ile ilgili daha fazla detay için xref:ROOT:module.adoc[Module] dokümanını inceleyiniz.

Örnek bir template oluşturma komutu aşağıdaki gibidir:
----
new-template --actions STANDARD_ACTIONS,CHANGE_AVATAR --featureName user --resourcesPath /home/user/telve-boot/modules/idm
----

* *Template oluşturmak ile ilgili daha fazla detay için xref:ROOT:template.adoc[Template] dokümanını inceleyiniz.

