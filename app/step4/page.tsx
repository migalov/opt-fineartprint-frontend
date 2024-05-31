import React from 'react'
import Container from '../_components/Container'
import TitleH1 from '../_components/TitleH1'
import PreviewDocument from '../_components/PreviewDocument'
import Pagination from '../_components/Pagination'
import WarningMessage from '../_components/WarningMessage'
import CustomCheckbox from '../_components/CustomFields/CustomCheckbox'
import СonditionsProcessingPersonalData from '../_components/СonditionsProcessingPersonalData'
import DateReady from '../_components/DateReady'
import TotalCost from '../_components/TotalCost'
import NumberOrder from '../_components/NumberOrder'

const StepFourth = () => {
  return (
    <Container>
      <TitleH1>Утверждение в печать</TitleH1>
      <PreviewDocument />
      <Pagination
        title='Листы'
        countPages={14}
      />
      <div className='grid grid-cols-[1fr_1fr] gap-6'>
        <div className='flex flex-col gap-4'>
          <WarningMessage>
            <p>Ставя галочку, я подтверждаю что: орфография и пунктуация текста верна; содержимое макета расположено верно.</p>
            <p>Я понимаю, что этот макет будет напечатан, КАК ОТОБРАЖЕНО ВЫШЕ (без вспомогательных линий), и что я не смогу внести в дальнейшем какие бы то ни были исправления в макет</p>
          </WarningMessage>
          <div>
              <label className="flex items-start  gap-4" id="accept">
                  <CustomCheckbox id={"accept"} />
                  <СonditionsProcessingPersonalData />
              </label>
          </div>
          <div className="flex flex-col gap-4">
              <DateReady
                  title="Готовность"
                  date={"17.04.24"}
              />
              <TotalCost
                  cost={4050}
              />
              <a href="/step5" className="w-full inline-block bg-black text-white font-bold text-2xl text-center py-4 rounded-15">Оформить заказ</a>
          </div>
        </div>
        <div>
          <NumberOrder
            idOrder={4325323}
          />
        </div>
      </div>
    </Container>
  )
}

export default StepFourth
