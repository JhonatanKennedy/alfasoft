<template>
  <div class="crud-container">
    <div class="contact-container">
      <div class="title">
        <h1>{{ $t("homePage.contacts") }}</h1>
        <div class="button-new" @click="handleNewContactDialog()">
          <button>+</button>
          <span>{{ $t("contactPage.buttonNew") }}</span>
        </div>
      </div>
      <br />
      <div class="contact-list">
        <ContactCard
          v-for="(contact, id) in contacts"
          :url="contact.url"
          :name="contact.name"
          :email="contact.email"
          :contact="contact.contact"
          :key="id"
          :id="id"
          :hasOptions="true"
          @changeContact="getContacts()"
        />
      </div>
    </div>
    <v-dialog
      v-model="newContactDialog"
      persistent
      max-width="600px"
      class="dialog"
    >
      <v-card color="#222330">
        <v-card-title>
          <span class="text-h5">{{ $t("contactPage.userContact") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.name')"
                  min="5"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.email')"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="contact"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.contact')"
                  persistent-hint
                  maxLength="9"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="url"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.url')"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="newContactDialog = false">
            {{ $t("contactPage.buttonCloseDialog") }}
          </v-btn>
          <v-btn text @click="saveContact()">
            {{ $t("contactPage.buttonSaveDialog") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ContactCard from "@/components/Contact/ContactCard.vue";
export default {
  components: { ContactCard },
  name: "ContactView",
  data() {
    return {
      newContactDialog: false,
      contacts: [],
      name: "",
      email: "",
      url: "",
      contact: "",
    };
  },
  mounted() {
    if (localStorage.getItem("contacts")) {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
  },
  methods: {
    handleNewContactDialog() {
      this.newContactDialog = !this.newContactDialog;
    },
    getContacts() {
      if (localStorage.getItem("contacts")) {
        this.contacts = JSON.parse(localStorage.getItem("contacts"));
      }
    },
    saveContact() {
      this.contacts.push({
        name: this.name,
        email: this.email,
        url: this.url,
        contact: this.contact,
      });

      const contacts = JSON.stringify(this.contacts);
      localStorage.setItem("contacts", contacts);
      this.name = "";
      this.email = "";
      this.url = "";
      this.contact = "";
      this.newContactDialog = false;
    },
  },
  watch: {
    contacts(newContacts) {
      this.contacts = newContacts;
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
