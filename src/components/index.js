/*
Требования к модульности кода. К этому моменту вы напишите много разных функций.
Если собрать их все в одной файле index.js — читать его станет очень сложно не только вам,
но и наставнику или код-ревьюерам. Поэтому код следует разделить на разные модули. Создайте отдельную директорию для хранения скриптов внутри директории src/, можете назвать её components/. Разбейте функции по нескольким файлам:
функциональность валидации форм вынесите в файл validate.js;
функции для работы с карточками проекта Mesto вынесите в файл card.js;
работу модальных окон — в файл modal.js;
утилитарные функции, которые используются в работе сразу нескольких других функций, —
в файл utils.js;
инициализацию JS-кода, добавление слушателей и другие важные участки оставьте в файле index.js.
Чтобы было чуточку понятнее — пример выше с вызовом функции enableValidation должен
находиться в файле index.js. А все другие функции, включая декларирование
функции enableValidation и валидации форм, — в отдельном файле validate.js.
Используйте директивы export/import.
*/

const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const buttonEditProfile = profile.querySelector('.profile__edit-button');
const buttonAddCard = profile.querySelector('.profile__add-button');
const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupPreviewImage = document.querySelector('.popup_type_image-preview');
const popupAddCard = document.querySelector('.popup_type_add-card');
const formEditProfile = document.querySelector('#formEditProfile');
const formEditNameField = document.querySelector('#formEditProfile').elements['name'];
const formEditOccupationField = document.querySelector('#formEditProfile').elements['occupation'];
const formAddCard = document.querySelector('#formAddCard');
const formAddPlaceField = document.querySelector('#formAddCard').elements['place'];
const formAddPictureField = document.querySelector('#formAddCard').elements['picture'];
const cardContainer = document.querySelector('.cards__list');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');

function openPopup(popup) {
  // функция открытия диалогового окна
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  // функция закрытия диалогового окна
  popup.classList.remove('popup_opened');
}

function createCard(cardData) {
  // функция создания карточки
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  // создаем новую карточку по шаблону
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;
  // заполняем шаблон карточки данными из формы создания

  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
    // создаем слушатель на событие постановки / снятия лайка
    evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
    // создаем слушатель на событие нажатия на кнопку "Удалить" в карточке
    evt.target.parentElement.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
    // создаем слушатель на событие нажатия на превью фото в карточке
    const clickedImageSrc = evt.target.src;
    const clickedImageTitle = evt.target.nextElementSibling.textContent;
    renderImagePreview(clickedImageSrc, clickedImageTitle);
  });

  return cardElement;
}

function renderCard(card) {
  // функция добавления новой карточки в разметку
  cardContainer.prepend(card);
}

function loadInitialCards(cards) {
  // функция загрузки начальных карточек на страницу
  cards.forEach(element => {
    const newCard = createCard(element);
    renderCard(newCard);
  });
};

loadInitialCards(initialCards);
// при загрузке страницы загружаем карточки из заранее заготовленного массива

function renderImagePreview(image, title) {
  // функция отрисовки окна предпросмотра фото
  const popupImage = popupPreviewImage.querySelector('.popup__image');
  const popupImageTitle = popupPreviewImage.querySelector('.popup__image-title');
  popupImage.src = image;
  popupImage.alt = title;
  popupImageTitle.textContent = title;
  openPopup(popupPreviewImage);
  // открываем окно предпросмотра фото
}

buttonEditProfile.addEventListener('click', () => {
  //  открытие окна редактирования профиля
  // formEditNameField.value = profileTitle.textContent;
  // formEditOccupationField.value = profileSubtitle.textContent;
  // // отображаем в окне уже введенную информацию о профиле
  openPopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  // открытие формы добавления карточки
  openPopup(popupAddCard);
});

formEditProfile.addEventListener('submit', (evt) => {
  // редактирование и сохранение данных профиля
  const popup = evt.target.closest('.popup');
  evt.preventDefault();
  // отменяет стандартную отправку формы, которая перезагружает страницу,
  // теперь можем определить свою логику отправк
  profileTitle.textContent = formEditNameField.value;
  profileSubtitle.textContent = formEditOccupationField.value;
  // сохраняем введенные данные в блоке информации о профиле
  closePopup(popup);
});

formAddCard.addEventListener('submit', (evt) => {
  // добавление карточки в разметку
  evt.preventDefault();
  const cardData = {
    name: formAddPlaceField.value,
    link: formAddPictureField.value
  }
  // создает объект с данными карточки
  const newCard = createCard(cardData);
  // создаем новую карточку
  renderCard(newCard);
  // добавляем карточку на страницу в начало списка
  formAddCard.reset();
  // после добавлении новой карточки поля формы очищаются
  closePopup(popupAddCard);
});

function setMultipleClickListeners(elements) {
  // функция добавления слушателей для события клика сразу нескольким DOM элементам
  const elementsArray = Array.from(elements);
  elementsArray.forEach(element => element.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget)
      // если нажатие произошло оверлей, оно также закроется
      closePopup(evt.target.closest('.popup'));
  }));

  elementsArray.forEach(element => element.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape')
      // если нажата клавиша Ecs, то попап закроется
      closePopup(evt.target.closest('.popup'));
  }));
}

window.addEventListener('keydown', function (evt) {
  // добавляем возможность закрывать диалоговые окна путем нажатия на кнопку Ecs
  if (evt.key === 'Escape') {
    popups.forEach(popup => closePopup(popup));
  }
})

setMultipleClickListeners(popupCloseButtons);
// добавляем слушателей кнопкам закрытия для всех диалоговых окон в разметке

setMultipleClickListeners(popups);
// добавляем возможность закрывать диалоговые окна путем нажатия на оверлей



// ****************************** Валидация форм ***********************************

const buttonElement = document.querySelectorAll

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__field-input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__field-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__field-input_type_error');
  errorElement.classList.remove('form__field-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно мнять
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('form__submit-button_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('form__submit-button_inactive');
  }
};

const setEventListeners = (formElement) => {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll('.form__field-input'));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.form__submit-button');
  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll('.form__input-container'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};

enableValidation();
